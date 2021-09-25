import DropIcon from "../../drop-icon/drop-icon.component";
import {SignInOptionContainerPS,
        SignInOptionTextPS} from "./signin-option.styles";

const SignInOption = () => {
    return(
        <SignInOptionContainerPS>
            <SignInOptionTextPS>
                <span>Hello, Sign in</span>
                <span>Account & lists</span>
            </SignInOptionTextPS>
            <DropIcon customDropIconStyles>
            </DropIcon>
        </SignInOptionContainerPS>
    )
}

export default SignInOption;