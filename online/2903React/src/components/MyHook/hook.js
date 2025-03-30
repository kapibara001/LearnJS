import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Хук для создания запроса на url
 */

export function useRequest(url, method, headers, body, deps = []) {
    const [isLoading, setStateLoading] = useState(false);
    const [isError, setStateError] = useState(false);

    const [data, setData] = useState();

    useEffect(
        () => {
            setData(undefined);
            setStateLoading(false);
            setStateError(true);

            axios.get(url, body, headers)
                .then(res => {
                    if (res.status === 200) {
                        setData(res.data);
                    } else {
                        setStateError(true);
                    }
                })
                .finally(
                    () => {
                        setStateLoading(false);
                    }
                )
        }, deps
    );

    return { data, isError, isLoading };
}