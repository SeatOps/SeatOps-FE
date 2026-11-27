import { useState } from 'react';
import searchIcon from '../../assets/icon/search/search.svg';

interface AdminTitleSearchProps {
  placeholder: string;
}

function AdminTitleSearch({ placeholder }: AdminTitleSearchProps) {
  const [search, setSearch] = useState<string>('');
  return (
    <form className="flex h-[71px] w-[400px] items-center rounded-[10px] overflow-hidden border border-gray-50 bg-gray-0">
      <input
        className="flex-1 px-[20px] text-gray-70 outline-none placeholder:text-gray-30"
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="w-[70px] h-full border-l border-gray-50 bg-transparent flex items-center justify-center"
        type="submit"
      >
        <img alt="검색하기 아이콘" src={searchIcon} />
      </button>
    </form>
  );
}

export default AdminTitleSearch;
