import React from 'react';

 type ButtonPropsType = {
    name: string,
    callBack: ()=>void

}
export const Button = (props:ButtonPropsType) => {
    const onClickButtonHandler = () =>
    {props.callBack()}
    <div>
        <button onClick={onClickButtonHandler}>+</button>
    </div>
}