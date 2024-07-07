import styles from "../Filter.module.css"

type FilterItemProps = {
    title: string;
    isActive: boolean;
    list: string[];
    handleFilter: () => void;
  }

const FilterItem = ({title, isActive, list, handleFilter }:FilterItemProps) => {

/* const filters = [
  {
    title: "исполнителю",
    key: "author",
    list: getUniqueValues(tracks, "author"),
  },
  { title: "году выпуска", key: "release_date", list: SORT_OPTIONS },
  { title: "жанру", key: "genre", list: getUniqueValues(tracks, "genre") },
]; */

    return ( <div className={styles.filterWrapper}>
        <div onClick={handleFilter} className={styles.filterButton}>
        {title}
      </div>
      {isActive && (
        <ul className={styles.filterList}>
            {list.map((item)=>(
                <li key={item} className={styles.filterListItem}>
                  {item}
                </li>
            ))}
        
        </ul>
      )}
    </div> );
}
 
export default FilterItem;