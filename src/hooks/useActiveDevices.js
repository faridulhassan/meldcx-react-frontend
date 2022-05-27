import { useState, useEffect } from "react";
import { getData } from "../utils";

// for api request cancellation
const controller = new AbortController();
const INTERVAL = 5000;

export default function useActiveDevices() {
    const [activeDevices, setActiveDevices] = useState([]),
        [errorMessage, setErrorMessage] = useState({}),
        [isActiveDevicesLoading, setIsActiveDevicesLoading] = useState(false);

    const loadData = () => {
        setIsActiveDevicesLoading(true);
        getData({
            path: "/devices",
            config: {
                signal: controller.signal
            }
        })
            .then((result) => {
                setIsActiveDevicesLoading(false);
                setActiveDevices(result?.data?.devices);
            })
            .catch((error) => {
                setIsActiveDevicesLoading(false);
                setErrorMessage({
                    message: error?.data,
                    status: error?.status
                });
            });
    };

    useEffect(() => {
        loadData();
        setInterval(() => {
            // controller.abort();
            loadData();
        }, INTERVAL);
    }, []);

    return { isActiveDevicesLoading, activeDevices, errorMessage };
}
