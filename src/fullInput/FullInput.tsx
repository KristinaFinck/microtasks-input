import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void,

}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title) //Вы создаете локальное состояние title для компонента с начальным значением пустой строки. setTitle - это функция, которая позволяет обновить это состояние.

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    } //Эта функция вызывается каждый раз, когда пользователь что-то вводит в поле ввода. Она берет введенное значение и устанавливает его в состояние title.
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    } //Эта функция вызывается, когда пользователь нажимает кнопку. Она делает две вещи:

    //Вызывает функцию addMessage из пропсов, передавая ей текущее значение title.
        //Очищает состояние title, устанавливая его в пустую строку.

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}