'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  width: fit-content;
  gap: 0.5rem;
`;

const ListWrapper = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
`;

const Item = styled.li`
  margin-top: 1.5rem;
  font-weight: 600;
  list-style-type: none;
`;

const ContentList = ({
  title,
  subtitle,
  itemlist,
}: {
  title?: string;
  subtitle?: string;
  itemlist?: { item: string; subitem: string }[];
}) => {
  return (
    <Wrapper>
      {title && <h1>{title}</h1>}
      {subtitle && <h2>{subtitle}</h2>}
      {itemlist &&
        itemlist.map((listitem, index) => (
          <ListWrapper key={index}>
            <Item>{listitem.item}</Item>
            {listitem.subitem && <p>{listitem.subitem}</p>}
          </ListWrapper>
        ))}
    </Wrapper>
  );
};

export default ContentList;
