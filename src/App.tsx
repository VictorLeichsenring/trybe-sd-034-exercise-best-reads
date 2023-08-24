import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookListType } from './types';

const bookIndexStart = 10;
const bookIndexEnd = 15;
const placeHolderList = data.slice(bookIndexStart, bookIndexEnd); // esse código deverá ser excluído após a implementação do requisito 2

function App() {
  const [indexBook, setIndexBook] = useState(0);
  const [wishList, setWishList] = useState<BookListType>([]);
  const [readingList, setReadingList] = useState<BookListType>([]);
  const [readList, setReadList] = useState<BookListType>([]);

  function handleButtonNextBook() {
    if (indexBook + 1 < data.length) {
      setIndexBook(indexBook + 1);
    } else {
      setIndexBook(0);
    }
  }

  function handleWishList() {
    setWishList([...wishList, data[indexBook]]);
  }

  function handleReadingList() {
    setReadingList([...readingList, data[indexBook]]);
  }

  function handleReadList() {
    setReadList([...readList, data[indexBook]]);
  }

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[indexBook] } showDetails />
        <div className="selector-buttons">
          <button onClick={ handleWishList }>Adicionar à lista de desejos</button>
          <button onClick={ handleReadingList }>Adicionar à lista de leitura</button>
          <button onClick={ handleReadList }>Adicionar à lista de lidos</button>
          <button onClick={ handleButtonNextBook }>Próximo livro</button>
        </div>
      </div>

      <div className="list-buttons">
        <button>Exibir lista de desejos</button>
        <button>Exibir lista de leitura</button>
        <button>Exibir lista de lidos</button>
      </div>
      <h1>Lista de ...</h1>
      <BookList books={ wishList } />
    </div>
  );
}

export default App;
