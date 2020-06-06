import Knex from "knex";

export async function seed(knex: Knex){
  await knex('items').insert([
    { title: 'Lámparas', image: 'lampadas.svg' },
    { title: 'Pilas y baterias', image: 'baterias.svg' },
    { title: 'Papeles', image: 'papeis-papelao.svg' },
    { title: 'Residuos Electrónicos', image: 'eletronicos.svg' },
    { title: 'Residuos Orgánicos', image: 'organicos.svg' },
    { title: 'Aceite de cocina', image: 'oleo.svg' },
  ])
}