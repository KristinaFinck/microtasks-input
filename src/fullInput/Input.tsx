import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title:string)=> void,
    title: string
}
export const Input = (props:InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
       props.setTitle(event.currentTarget.value)
    } //Эта функция вызывается каждый раз, когда пользователь что-то вводит в поле ввода. Она берет введенное значение и устанавливает его в состояние title.
    return (
        <div>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </div>
    )
}