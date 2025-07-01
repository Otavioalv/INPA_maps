import styles from "./styles.module.css"

export const LoadingTableIntStatus = () => {
    return (
        <div className="flex flex-col items-center gap-5 bg-gree">
            <div className={styles.loadingWave}>
                <div className={styles.loadingBar}></div>
                <div className={styles.loadingBar}></div>
                <div className={styles.loadingBar}></div>
                <div className={styles.loadingBar}></div>
            </div>

            <h1 className="text-2xl text-zinc-700">
                Carregando dados
            </h1>
        </div>
    )
}