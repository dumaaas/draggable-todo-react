import TodoBoard from './components/TodoBoard/TodoBoard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';
import { Typography } from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const todoCards = [
    {
        id: 1,
        title: 'Telekom task 1',
        date: '09.01.2023',
        smallDescription: 'Treba da izvršite reviziju koda u aplikaciji i da ispravite sve greške. Potrebno je da se fokusirate na performanse i da optimizujete kod kako bi aplikacija radila što brže. Neophodno je da izvršite testiranje nakon što završite sa izmjenama kako bi se uverili da sve radi ispravno.',
        bigDescription: "Naša aplikacija trenutno ima neke probleme sa performansama i postoje mnoga mesta gde se kod može optimizovati. Vaš zadatak je da izvršite detaljnu reviziju koda i da ispravite sve greške koje pronađete. Potrebno je da se fokusirate na optimizaciju delova koda koji utiču na performanse, kako bi aplikacija radila što brže i efikasnije. Posle što završite sa izmjenama, neophodno je da izvršite temeljito testiranje kako bi se uverili da su sve greške ispravljene i da aplikacija radi ispravno. Molimo vas da pažljivo pratite uputstva za rad i da budete pažljivi prilikom izvršavanja ovog zadatka, jer će se od vašeg rada direktno odraziti na performanse aplikacije. Hvala na razumevanju i radujemo se vašem uspešnom izvršenju ovog zadatka.",
        status: false
      },
    {
        id: 2,
        title: 'Telekom task 2',
        date: '10.01.2023',
        smallDescription: 'Treba da izvršite reviziju koda u aplikaciji i da ispravite sve greške. Potrebno je da se fokusirate na performanse i da optimizujete kod kako bi aplikacija radila što brže. Neophodno je da izvršite testiranje nakon što završite sa izmjenama kako bi se uverili da sve radi ispravno.',
        bigDescription: "Naša aplikacija trenutno ima neke probleme sa performansama i postoje mnoga mesta gde se kod može optimizovati. Vaš zadatak je da izvršite detaljnu reviziju koda i da ispravite sve greške koje pronađete. Potrebno je da se fokusirate na optimizaciju delova koda koji utiču na performanse, kako bi aplikacija radila što brže i efikasnije. Posle što završite sa izmjenama, neophodno je da izvršite temeljito testiranje kako bi se uverili da su sve greške ispravljene i da aplikacija radi ispravno. Molimo vas da pažljivo pratite uputstva za rad i da budete pažljivi prilikom izvršavanja ovog zadatka, jer će se od vašeg rada direktno odraziti na performanse aplikacije. Hvala na razumevanju i radujemo se vašem uspešnom izvršenju ovog zadatka.",
        status: false
    },
    {
        id: 3,
        title: 'Telekom task 3',
        date: '09.01.2023',
        smallDescription: 'Treba da izvršite reviziju koda u aplikaciji i da ispravite sve greške. Potrebno je da se fokusirate na performanse i da optimizujete kod kako bi aplikacija radila što brže. Neophodno je da izvršite testiranje nakon što završite sa izmjenama kako bi se uverili da sve radi ispravno.',
        bigDescription: "Naša aplikacija trenutno ima neke probleme sa performansama i postoje mnoga mesta gde se kod može optimizovati. Vaš zadatak je da izvršite detaljnu reviziju koda i da ispravite sve greške koje pronađete. Potrebno je da se fokusirate na optimizaciju delova koda koji utiču na performanse, kako bi aplikacija radila što brže i efikasnije. Posle što završite sa izmjenama, neophodno je da izvršite temeljito testiranje kako bi se uverili da su sve greške ispravljene i da aplikacija radi ispravno. Molimo vas da pažljivo pratite uputstva za rad i da budete pažljivi prilikom izvršavanja ovog zadatka, jer će se od vašeg rada direktno odraziti na performanse aplikacije. Hvala na razumevanju i radujemo se vašem uspešnom izvršenju ovog zadatka.",
        status: false
    },
    {
      id: 4,
      title: 'Telekom task 4',
      date: '07.01.2023',
      smallDescription: 'Treba da izvršite reviziju koda u aplikaciji i da ispravite sve greške. Potrebno je da se fokusirate na performanse i da optimizujete kod kako bi aplikacija radila što brže. Neophodno je da izvršite testiranje nakon što završite sa izmjenama kako bi se uverili da sve radi ispravno.',
      bigDescription: "Naša aplikacija trenutno ima neke probleme sa performansama i postoje mnoga mesta gde se kod može optimizovati. Vaš zadatak je da izvršite detaljnu reviziju koda i da ispravite sve greške koje pronađete. Potrebno je da se fokusirate na optimizaciju delova koda koji utiču na performanse, kako bi aplikacija radila što brže i efikasnije. Posle što završite sa izmjenama, neophodno je da izvršite temeljito testiranje kako bi se uverili da su sve greške ispravljene i da aplikacija radi ispravno. Molimo vas da pažljivo pratite uputstva za rad i da budete pažljivi prilikom izvršavanja ovog zadatka, jer će se od vašeg rada direktno odraziti na performanse aplikacije. Hvala na razumevanju i radujemo se vašem uspešnom izvršenju ovog zadatka.",
      status: true
    },
    {
        id: 5,
        title: 'Telekom task 5',
        date: '05.01.2023',
        smallDescription: 'Treba da izvršite reviziju koda u aplikaciji i da ispravite sve greške. Potrebno je da se fokusirate na performanse i da optimizujete kod kako bi aplikacija radila što brže. Neophodno je da izvršite testiranje nakon što završite sa izmjenama kako bi se uverili da sve radi ispravno.',
        bigDescription: "Naša aplikacija trenutno ima neke probleme sa performansama i postoje mnoga mesta gde se kod može optimizovati. Vaš zadatak je da izvršite detaljnu reviziju koda i da ispravite sve greške koje pronađete. Potrebno je da se fokusirate na optimizaciju delova koda koji utiču na performanse, kako bi aplikacija radila što brže i efikasnije. Posle što završite sa izmjenama, neophodno je da izvršite temeljito testiranje kako bi se uverili da su sve greške ispravljene i da aplikacija radi ispravno. Molimo vas da pažljivo pratite uputstva za rad i da budete pažljivi prilikom izvršavanja ovog zadatka, jer će se od vašeg rada direktno odraziti na performanse aplikacije. Hvala na razumevanju i radujemo se vašem uspešnom izvršenju ovog zadatka.",
        status: true
    },
    {
        id: 6,
        title: 'Telekom task 6',
        date: '02.01.2023',
        smallDescription: 'Treba da izvršite reviziju koda u aplikaciji i da ispravite sve greške. Potrebno je da se fokusirate na performanse i da optimizujete kod kako bi aplikacija radila što brže. Neophodno je da izvršite testiranje nakon što završite sa izmjenama kako bi se uverili da sve radi ispravno.',
        bigDescription: "Naša aplikacija trenutno ima neke probleme sa performansama i postoje mnoga mesta gde se kod može optimizovati. Vaš zadatak je da izvršite detaljnu reviziju koda i da ispravite sve greške koje pronađete. Potrebno je da se fokusirate na optimizaciju delova koda koji utiču na performanse, kako bi aplikacija radila što brže i efikasnije. Posle što završite sa izmjenama, neophodno je da izvršite temeljito testiranje kako bi se uverili da su sve greške ispravljene i da aplikacija radi ispravno. Molimo vas da pažljivo pratite uputstva za rad i da budete pažljivi prilikom izvršavanja ovog zadatka, jer će se od vašeg rada direktno odraziti na performanse aplikacije. Hvala na razumevanju i radujemo se vašem uspešnom izvršenju ovog zadatka.",
        status: true
    }
  ];
  if(!JSON.parse(localStorage.getItem('todoCards'))) {
    localStorage.setItem('todoCards', JSON.stringify(todoCards));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-red-800 flex flex-col p-[20px] min-h-screen h-full">
        <div className='pb-[40px]'>
          <Typography className='text-center text-white' variant='h2'>
            TODO List
          </Typography>
        </div>
        <TodoBoard />
      </div>
    </DndProvider>
  );
}


export default App;
