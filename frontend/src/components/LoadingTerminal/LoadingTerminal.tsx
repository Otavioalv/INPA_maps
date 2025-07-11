import styles from './styles.module.css';

export const LoadingTerminal = () => {
    return (
        <div className='absolute flex justify-center w-full h-full'>
            <div className={styles.loader}>
                <span>&lt;</span>
                <span>LOADING</span>
                <span>/&gt;</span>
            </div>
        </div>
    );
}