import { api } from "../../../services/api";
import { sendToast } from "../toasts";
import { Dispatch, SetStateAction } from "react";
import { Category } from "@/interfaces/config";
import { UseFormReset, UseFormSetValue } from "react-hook-form";


export const getCategories = async ({ setLoading, setCategoriesList, reset }: {
    setLoading: Dispatch<SetStateAction<boolean>>,
    setCategoriesList: Dispatch<React.SetStateAction<Category[]>>,
    reset: UseFormReset<{ categories: Category[] }>
}) => {
    try {
        setLoading && setLoading(true);

        const response = await api.get(`adm/category`);
        const categories = response.data;

        console.log("========================================");
        console.log(categories);
        console.log("========================================");

        setCategoriesList(categories);
        reset({ categories })
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao buscar categorias');
    } finally {
        setLoading && setLoading(false);
    }
}

const addCategories = async (categories: Category[]) => {
    for (const cat of categories) {
        await api.post(`adm/category`, {
            title: cat.title,
            icon: cat.icon
        });
    }
};

const updateCategories = async (categories: Category[]) => {
    for (const cat of categories) {
        await api.patch(`adm/category/${cat.id}`, {
            title: cat.title,
            icon: cat.icon
        });
    }
};

const deleteCategories = async (categories: Category[]) => {
    for (const cat of categories) {
        await api.delete(`adm/category/${cat.id}`);
    }
};

export const saveChanges = async ({
    setLoading,
    categoriesList,
    setCategoriesList,
    reset }: {
        setLoading: Dispatch<SetStateAction<boolean>>,
        categoriesList: Category[],
        setCategoriesList: Dispatch<React.SetStateAction<Category[]>>,
        reset: UseFormReset<{ categories: Category[] }>
    }) => {
    try {
        setLoading(true);

        const { data: dbCategories } = await api.get<Category[]>(`adm/category`);

        const dbMap = new Map(dbCategories.map(cat => [cat.id, cat]));
        const newMap = new Map(categoriesList.map(cat => [cat.id, cat]));

        const toAdd = categoriesList.filter(cat => !cat.id);
        const toUpdate = categoriesList.filter(cat => {
            if (!cat.id) return false;
            const dbCat = dbMap.get(cat.id);
            return dbCat && (dbCat.title !== cat.title || dbCat.icon !== cat.icon);
        });
        const toDelete = dbCategories.filter(cat => !newMap.has(cat.id));


        // 🔁 Chamadas com subfunções
        await addCategories(toAdd);
        await updateCategories(toUpdate);
        await deleteCategories(toDelete);

        // Atualiza estado após persistência
        const { data: updatedCategories } = await api.get(`adm/category`);
        setCategoriesList(updatedCategories);
        reset({ categories: updatedCategories })

        sendToast('success', 'Categorias salvas com sucesso!');
    } catch (error: any) {
        sendToast('error', error?.response?.data?.message || 'Erro ao salvar categorias');
    } finally {
        setLoading(false);
    }
}