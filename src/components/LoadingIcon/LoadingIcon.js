import styles from './LoadingIcon.module.css'

function LoadingIcon(){
    return(
        <div class={`${styles.position} d-flex justify-content-center`}>
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    )
}

export default LoadingIcon;