export default function useGlobalProperties() {
	const { appContext } = getCurrentInstance()
	return appContext.config.globalProperties
}
