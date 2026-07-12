const baseurl = process.env.NEXT_PUBLIC_BASE_URL





export const serverFetch = async <T>(path: string): Promise<T> => {
  try {
    const res = await fetch(`${baseurl}${path}`);

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Something went wrong");
    }

    return data.data as T;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Server Fetch Error:", error.message);
      throw error;
    }

    throw new Error("Unknown error occurred");
  }
};


export const serverMutation = async <T>(
  path: string,
  apiData: T,
  method: "POST" 
) => {
  const res = await fetch(`${baseurl}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(apiData),
  });

  return res.json();
};