import { OverlayContainer } from "./overlay.styles";

const Overlay = ({children, customOverlayStyles}) => {
    return(
        <OverlayContainer className={customOverlayStyles?"overlay":""}>
            {children}
        </OverlayContainer>
    )
}

export default Overlay;