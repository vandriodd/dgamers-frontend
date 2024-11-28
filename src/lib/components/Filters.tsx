import { RadioButton } from 'primereact/radiobutton'
import styles from './Filters.module.css'
import { type FilterValue, type FilterChangeType } from '../../types'
import { FILTERS_BUTTONS } from '../../consts'

interface FiltersProps {
  onFilterChange: FilterChangeType
  filterSelected: FilterValue
}

export default function Filters({
  filterSelected,
  onFilterChange
}: FiltersProps) {
  return (
    <ul className={styles.filtersList}>
      {Object.entries(FILTERS_BUTTONS).map(([key, { label }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key} className={styles.filterItem}>
            <RadioButton
              inputId={`filter-${key}`}
              name='filter'
              onChange={(e) => {
                e.preventDefault()
                onFilterChange(key as FilterValue)
              }}
              checked={isSelected}
              className={className}
            />
            <label htmlFor={`filter`}>{label}</label>
          </li>
        )
      })}
    </ul>
  )
}
