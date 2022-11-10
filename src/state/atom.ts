import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiktroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: []
})

export const filtroDeEventos = atom<IFiktroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})
