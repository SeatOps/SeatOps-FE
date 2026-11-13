import AdminTable from './AdminTable/AdminTable';
import AdminTableHead from './AdminTable/AdminTableHead';
import AdminTableSquare from './AdminTable/AdminTableSquare';
import AdminTableRow from './AdminTable/AdminTableRow';

function AdminStudentTable() {
  return (
    <AdminTable>
      <AdminTableHead>
        <AdminTableSquare size="10%">NO</AdminTableSquare>
        <AdminTableSquare size="15%">출결번호</AdminTableSquare>
        <AdminTableSquare size="15%">학생이름</AdminTableSquare>
        <AdminTableSquare size="20%">학부모 전화번호</AdminTableSquare>
        <AdminTableSquare size="20%">가입일시</AdminTableSquare>
        <AdminTableSquare size="15%">학생 ID</AdminTableSquare>
        <AdminTableSquare size="15%">삭제</AdminTableSquare>
      </AdminTableHead>
      <AdminTableRow>
        <AdminTableSquare size="10%">NO</AdminTableSquare>
        <AdminTableSquare size="15%">출결번호</AdminTableSquare>
        <AdminTableSquare size="15%">학생이름</AdminTableSquare>
        <AdminTableSquare size="20%">학부모 전화번호</AdminTableSquare>
        <AdminTableSquare size="20%">가입일시</AdminTableSquare>
        <AdminTableSquare size="15%">학생 ID</AdminTableSquare>
        <AdminTableSquare size="15%"> </AdminTableSquare>
      </AdminTableRow>
    </AdminTable>
  );
}

export default AdminStudentTable;
