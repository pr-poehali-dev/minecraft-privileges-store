import { useState, useEffect } from "react";

interface ServerStatus {
  online: number;
  max: number;
  isOnline: boolean;
}

export const useServerStatus = (host: string, port: number) => {
  const [status, setStatus] = useState<ServerStatus>({
    online: 0,
    max: 7500,
    isOnline: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        // Используем публичный API для проверки статуса Minecraft сервера
        const response = await fetch(
          `https://api.mcsrvstat.us/3/${host}:${port}`,
        );
        const data = await response.json();

        if (data.online) {
          setStatus({
            online: data.players?.online || 0,
            max: data.players?.max || 7500,
            isOnline: true,
          });
        } else {
          setStatus({
            online: 0,
            max: 7500,
            isOnline: false,
          });
        }
      } catch (error) {
        console.error("Ошибка получения статуса сервера:", error);
        setStatus({
          online: 0,
          max: 7500,
          isOnline: false,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000); // Обновление каждую минуту

    return () => clearInterval(interval);
  }, [host, port]);

  return { status, loading };
};
