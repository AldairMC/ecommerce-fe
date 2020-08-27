import React, { Component } from 'react';
import styled from 'styled-components'


class Account extends Component {
    render() {
        let { onChangeState } = this.props
        let { 
            name, 
            last_name, 
            email, 
            address, 
            document_person, 
            credit_card, 
            date_credit_card_ven, 
            address_cc,
            src, 
            msg
        } = this.props.persona_data

        const Container = styled.div`
            display: grid;
            margin: 50px 10% 50px 10%;
            grid-template-columns: 50% 50%;
            border: 2px dashed black;
            border-radius: 20px;
            @media(max-width: 768px){
                grid-template-columns: 100%;
            }
        `

        const ContainerInput = styled.div`
            grid-row-gap: 25px;
            display: grid;
            margin: 30px 10% 30px 10%;
            grid-tamplate-columns: 100%;
        `

        const Input = styled.input`
            height: 30px;
            border: none;
            border-bottom: 1px solid gray;
            font-size: 20px;
            @media (max-width: 768px){
                font-size: 15px;
            }
        `

        const ContainerSecurity = styled.div`
            display: grid;
            margin: 30px 10% 30px 10%;
            grid-template-columns: 100%;
            grid-template-rows: 300px 100px;
            grid-row-gap: 30px;
            height: 400px;
        ` 

        const ContainerImage = styled.div`
            display: grid;
            grid-template-columns: repeat(3, 33.33%);
            grid-template-rows: repeat(4, 25%);
        `
        

        const ContainerMsg = styled.div`
            display: grid;

        `

        const SImage = styled.span`
            display: grid;
            justify-sel: center;
            align-self: center;
        `

        const RadioInput = styled.input`
            display: grid;
            justify-self: center;
            align-self: center;
        `

        const Img = styled.img`
            display: grid;
            justify-self: center;
            align-self: center;
        `

        const Msg = styled.textarea`
            font-size: 20px;
            margin-bottom: 25px;
            border-top: none;
            border-left: none;
        `

        const Title = styled.h1`
            margin-top: 75px;
            text-align: center;
        `

        return (
            <>
                <Title>
                    Information of the client
                </Title>
                <Container>
                    <ContainerInput>
                        <Input 
                            placeholder="Name" 
                            type="text" 
                            name="name"
                            onChange={onChangeState}
                            value={name}
                        />
                        <Input 
                            placeholder="Last name" 
                            type="text" 
                            name="last_name" 
                            onChange={onChangeState}
                            value={last_name}
                        />
                        <Input 
                            placeholder="Email" 
                            type="email" 
                            name="email"
                            onChange={onChangeState}
                            value={email}
                        />
                        <Input 
                            placeholder="Address" 
                            type="text" 
                            name="address"
                            onChange={onChangeState}
                            value={address}
                        />
                        <Input 
                            placeholder="Document person" 
                            type="number" 
                            name="document_person"
                            onChange={onChangeState}
                            value={document_person}
                        />
                        <Input 
                            placeholder="CC" 
                            type="text" 
                            name="credit_card"
                            onChange={onChangeState}
                            value={credit_card}
                        />
                        <Input 
                            placeholder="Date Ven CC" 
                            type="text" 
                            name="date_credit_card_ven"
                            onChange={onChangeState}
                            value={date_credit_card_ven}
                        />
                        <Input 
                            placeholder="Direction CC" 
                            type="text" 
                            name="address_cc"
                            onChange={onChangeState}
                            value={address_cc}
                        />
                    </ContainerInput>
                    <ContainerSecurity>
                        <ContainerImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/9HQCtqT/Perro-2.png"
                                    alt="perro2"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/9HQCtqT/Perro-2.png"} 
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/9HQCtqT/Perro-2.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/QHGjqQ6/Perro-1.png"
                                    alt="perro1"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/QHGjqQ6/Perro-1.png"} 
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/QHGjqQ6/Perro-1.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/xMsc65z/Iman-2.png"
                                    alt="iman2"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/xMsc65z/Iman-2.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/xMsc65z/Iman-2.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/wCjcWLG/Iman-1.png"
                                    alt="iman1"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/wCjcWLG/Iman-1.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/wCjcWLG/Iman-1.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/mq7FDF9/Combo-2.png"
                                    alt="combo2"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/mq7FDF9/Combo-2.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/mq7FDF9/Combo-2.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/6bjmx4L/Combo-1.png"
                                    alt="combo1"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/6bjmx4L/Combo-1.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/6bjmx4L/Combo-1.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/fn57qvV/Candado-2.png"
                                    alt="candado2"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/fn57qvV/Candado-2.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/fn57qvV/Candado-2.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/mR3401H/Candado-1.png"
                                    alt="candado1"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/mR3401H/Candado-1.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/mR3401H/Candado-1.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/NnkswDg/Bicho-1.png"
                                    alt="bicho1"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/NnkswDg/Bicho-1.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/NnkswDg/Bicho-1.png"}
                                />
                            </SImage>
                            <SImage>
                                <Img 
                                    src="https://i.ibb.co/FKfVk3Z/Bicho-2.png"
                                    alt="bicho2"
                                    width="50"
                                    height="50"
                                />
                                <RadioInput 
                                    value={"https://i.ibb.co/FKfVk3Z/Bicho-2.png" }
                                    type="radio" 
                                    name="src"
                                    onChange={onChangeState}
                                    checked={src === "https://i.ibb.co/FKfVk3Z/Bicho-2.png"}
                                />
                            </SImage>
                        </ContainerImage>
                        <ContainerMsg>
                            <Msg 
                                placeholder="...Security message"
                                value={msg}
                                name="msg"
                                onChange={onChangeState}
                            ></Msg>
                        </ContainerMsg>
                    </ContainerSecurity>
                </Container>
            </>
            
        );
    }
}

export default Account;