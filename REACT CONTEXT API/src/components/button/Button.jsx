import { useContext } from "react";
import Context from "../card/Context";

const Button = ({ name }) => {

    const data = useContext(Context);

    return (
        <button
            onClick={() => data.setCount(data.count + 1)}
            className="btn"
        >
            {name}
        </button>
    );
};

export default Button;