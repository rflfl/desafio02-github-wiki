import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo() {
    return (
        <ItemContainer>
            <h3>Rafael</h3>
            <p>defafafa</p>
            <a href="#">Ver repositórios</a><br />
            <a href="#" className="remover">Remover</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo