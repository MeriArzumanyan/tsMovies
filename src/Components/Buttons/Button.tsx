import { useState } from "react";
import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/forHooks";
import { changePage } from "../../store/slices/moviesSlices";
import st from "./Button.module.css";
export const Button = () => {
  const { total_results } = useAppSelector((state) => state.moviesSlices);
  const dispatch = useAppDispatch();
  let diapason = 10;
  let [diapasonNumber, setDiapasonNumber] = useState<number>(1);
  let [active, setActive] = useState<Number>(1);
  let leftNumber = (diapasonNumber - 1) * diapason + 1;
  let rightPortionPageNumber = diapasonNumber * diapason;

  const pagesCount = Math.ceil(total_results / 20);

  let pages: number[] = [];

  const buttons = useMemo(() => {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }, [pages]);

  const changeCurentPage = (pageNumber: number) => {
    dispatch(changePage(pageNumber));
    setActive(pageNumber);
  };
  return (
    <div>
      {diapasonNumber > 1 && (
        <button
          onClick={() => {
            setDiapasonNumber(diapasonNumber - 1);
          }}
        >
          {"<"}
        </button>
      )}
      {buttons
        .filter((el) => el >= leftNumber && el <= rightPortionPageNumber)
        .map((el, index) => {
          return (
            <button
              key={index}
              className={el === active ? st.active : ""}
              onClick={() => changeCurentPage(el)}
            >
              {el}
            </button>
          );
        })}

      {pagesCount > diapasonNumber && (
        <button
          onClick={() => {
            setDiapasonNumber(diapasonNumber + 1);
          }}
        >
          {">"}
        </button>
      )}
    </div>
  );
};

export default Button;

// 900000 20

// const HomePage = () => {
//     const { films, page, total_pages, total_results } = useAppSelector((state) => state.filmsData)

//     const dispatch = useAppDispatch()
//     let portionSize = 10
//     let [portionNumber, setPortionNumber] = useState<number>(1)
//     let [active, setActive] = useState(1)
//     let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
//     console.log((portionNumber - 1) * portionSize + 1);

//     let rightPortionPageNumber = portionNumber * portionSize

//     const pagesCount = Math.ceil(total_results / 20)

//     let pages: number[] = []

//     const a = useMemo(() => {
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//         return pages
//     }, [pages])

//     const changeCurentPage = (pageNumber: number) => {
//         dispatch(changePage(pageNumber))
//         setActive(pageNumber)
//     }
//     return (
//         <div>
//             <div className='home-block'>
//                 {
//                     films
//                         .map((film) => {
//                             return <FilmsCard key={film.id} film={film} />
//                         })
//                 }
//             </div>
//             <div>
//                 {
//                     portionNumber > 1 &&
//                     <button onClick={() => { setPortionNumber(portionNumber - 1) }}>prev</button>
//                 }
//                 {
//                     a
//                         .filter((movie) => movie >= leftPortionPageNumber && movie <= rightPortionPageNumber)
//                         .map((p) => {
//                             return <button className={p === active ? 'a' : ''} onClick={() => changeCurentPage(p)}>{p}</button>
//                         })
//                 }

//                 {
//                     pagesCount > portionNumber &&
//                     <button onClick={() => { setPortionNumber(portionNumber + 1) }}>next</button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default HomePage
