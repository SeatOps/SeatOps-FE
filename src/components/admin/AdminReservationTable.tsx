import AdminTable from './AdminTable/AdminTable';
import AdminTableHead from './AdminTable/AdminTableHead';
import AdminTableSquare from './AdminTable/AdminTableSquare';
import AdminTableRow from './AdminTable/AdminTableRow';
import Button from '../common/Button';

function AdminReservationTable() {
  return (
    <AdminTable>
      <AdminTableHead>
        <AdminTableSquare size="15%">예약자</AdminTableSquare>
        <AdminTableSquare size="15%">자리번호</AdminTableSquare>
        <AdminTableSquare size="15%">출결번호</AdminTableSquare>
        <AdminTableSquare size="20%">학부모 전화번호</AdminTableSquare>
        <AdminTableSquare size="20%">예약일시</AdminTableSquare>
        <AdminTableSquare size="25%"> </AdminTableSquare>
      </AdminTableHead>
      <AdminTableRow>
        <AdminTableSquare size="15%">예약자</AdminTableSquare>
        <AdminTableSquare size="15%">자리번호</AdminTableSquare>
        <AdminTableSquare size="15%">출결번호</AdminTableSquare>
        <AdminTableSquare size="20%">학부모 전화번호</AdminTableSquare>
        <AdminTableSquare size="20%">예약일시</AdminTableSquare>
        <AdminTableSquare size="25%">
          <Button color="darkGray" variant="adminButton" radius={10}>
            신청하기
          </Button>
        </AdminTableSquare>
      </AdminTableRow>
    </AdminTable>
  );
}

export default AdminReservationTable;
