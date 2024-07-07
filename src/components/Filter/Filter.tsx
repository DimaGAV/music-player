'use client'
import { PlaylistType } from "@/types/playlist";
import styles from "./Filter.module.css"
import { getUniqueValues } from "@/utils/getUniqueValues";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";

const SORT_OPTIONS = ["По умолчанию", "Сначала новые", "Сначала старые"];

type FilterProps = {
  tracks: PlaylistType[]
}

const Filter = ({tracks}: FilterProps) => {
const [activeFilter, setActiveFilter] = useState<string | null>(null)

const handleFilter = (filterName:string) => {
  setActiveFilter((prev) => (prev === filterName ? null : filterName))
}

const getUniqueAuthors = getUniqueValues(tracks, "author")
// const getUniqueYears = getUniqueValues(tracks, "release_date")
const getUniqueGenre = getUniqueValues(tracks, "genre")

    return ( <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>
          Искать по:
        </div>
        <FilterItem
        title ="исполнителю"
        isActive={activeFilter === "исполнителю"}
        list={getUniqueAuthors}
        handleFilter={() => handleFilter("исполнителю")}/>
        {/* <div className={styles.filterButton}>
          году выпуска
        </div> */}
        <FilterItem title ="году выпуска" isActive={activeFilter === "году выпуска"} list={SORT_OPTIONS} handleFilter={() => handleFilter("году выпуска")}/>
       {/*  <div className={styles.filterButton}>
          жанру
        </div> */}
        <FilterItem title ="жанру" isActive={activeFilter === "жанру"} list={getUniqueGenre} handleFilter={() => handleFilter("жанру")}/>
      </div> );
}
 
export default Filter;