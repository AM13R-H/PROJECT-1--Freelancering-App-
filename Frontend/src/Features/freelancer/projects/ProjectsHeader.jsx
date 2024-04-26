import useCategories from '../../../Hooks/useCategories';
import Filter from '../../../Ui/Filter';
import FilterDropDown from '../../../Ui/FilterDropDown';

function ProjectsHeader() {
  const { transformedCategories } = useCategories();

  return (
    <div className="flex justify-between items-center p-5">
      <h2 className="header">Projects</h2>
      <div className="space-x-5">
        <FilterDropDown
          filterField="category"
          options={[
            {
              label: 'all',
              value: 'ALL',
            },
            ...transformedCategories,
          ]}
        />
        <FilterDropDown
          filterField="sort"
          options={[
            {
              label: 'all sort',
              value: 'all',
            },
            {
              label: 'newest',
              value: 'newest',
            },
            {
              label: 'latest',
              value: 'latest',
            },
          ]}
        />
        <Filter
          filterFiled="status"
          options={[
            {
              label: 'all status',
              value: 'ALL',
            },
            {
              label: 'open',
              value: 'OPEN',
            },
            {
              label: 'closed',
              value: 'CLOSED',
            },
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
