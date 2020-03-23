import React, { useContext } from 'react';

import { Container } from './styles';

import { MdAdd } from 'react-icons/md';

import { useDrop } from 'react-dnd';

import Card from '../Card';

import BoardContext from '../Board/context';

export default function List({ data, index: listIndex }) {
  const { move } = useContext(BoardContext);

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      if (listIndex === item.listIndex) {
        return;
      }

      const size = data.cards.length;

      move(item.listIndex, listIndex, item.index, size);

      item.index = size;
      item.listIndex = listIndex;
    }
  });

  return (
    <Container ref={dropRef} done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#FFF' />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} listIndex={listIndex} index={index} />
        ))}
      </ul>
    </Container>
  );
}
