import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { obterId } from "../../util"
import { listaDeEventosState } from "../atom"

const useAdicionarEvento = () => {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)
    return (evento: IEvento) => {
        const hoje = new Date()
        if (evento.inicio < hoje) {
            throw new Error("Evento não pode ser cadastrado com data menor do que a atual!");

        }
        evento.id = obterId()
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento
