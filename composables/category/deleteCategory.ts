export const deleteCategory = async (id: number) => {
  const config = useRuntimeConfig();
  const error = ref<unknown>();
  const endpoint = `${config.public.apiBase}/categories/deleteCategory`;
  try {
    const response = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    error.value = e;
  }
};