import React from 'react';
import { useParams } from 'react-router-dom';
import { useSpells } from '../../hooks/useSpells';

export default function SpellDetail({ name, incantation, effect }) {
  const { id } = useParams();

  const { spell, loading } = useSpells(id);
  return (
    <div>
      <div>
        <h1>Spell Detail</h1>
        <h2>{spell.incantation}</h2>
        <h3>{spell.name}</h3>
        <span>{spell.effect}</span>
      </div>
    </div>
  );
}
