import AdminPageTitle from '../../components/admin/AdminPageTitle';
import Button from '../../components/common/Button';

function StudentsApproval() {
  return (
    <div>
      <AdminPageTitle title="미승인 학생 조회">
        <div className="flex gap-[15px]">
          <Button color="darkGray" variant="adminTitleButton" radius={50}>
            <p className="typo-ll-bold">이전</p>
          </Button>
          <Button color="gray" variant="adminTitleButton" radius={50}>
            <p className="typo-ll-bold">이전</p>
          </Button>
        </div>
      </AdminPageTitle>
    </div>
  );
}

export default StudentsApproval;
