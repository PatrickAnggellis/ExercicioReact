import React from 'react'
import {createAppContainer, createDrawerNavigator} from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena}  from './componentes/Multi';
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import {Avo} from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'

const drawerNavigator = createDrawerNavigator({
    ListaFlex: {
        screem: ListaFlex,
        navigationOption: {title: 'Lista Flex'}
    },

    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOption: {title: 'Texto Sincronizado'}
    },

    Avo: {
        screen: () => <Avo nome= 'João' sobrenome= 'Silva' />
    },
    
    Evento: {
        screen: Evento    
    },

    ValidarProps: {
        screen: () => <ValidarProps ano = {18}/>
    },

    Plataforma: {
        screen: Plataforma
    },

    Contador:{
        screen: ()=> <Contador/>
    },

    MegaSena: {
        screen: ()=> <MegaSena numeros = {6}/>,
        navigationOption: {title: 'Mega Sena'}
    },

    Inverter: {
        screen: () => <Inverter texto = 'React Native!'/>
    },

    ParImpar: {
        screen: () => <ParImpar numero = {38}/>,
        navigationOption: {title: 'Par ou ímpar'}
    },
    
    Simples: {
        screen: () => <Simples texto = 'Flexível'/>,
        navigationOption: {title: 'Simples'}
    } 
}, {drawerWidht: 300, edgeWidth: 100 });

export default createAppContainer(drawerNavigator);