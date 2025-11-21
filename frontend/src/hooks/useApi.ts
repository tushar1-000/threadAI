import { useState } from "react";

export function useApi(apiFunc) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function request(data) {
    try {
      setLoading(true);
      setError("");

      const res = await apiFunc(data);
      return res.data;

    } catch (err) {
        console.log(err)
      setError(
        err?.response?.data?.message || "Something went wrong"
      );
      return null;
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, request };
}
