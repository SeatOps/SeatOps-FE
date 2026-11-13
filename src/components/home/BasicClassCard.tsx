import Button from '../common/Button';
import ClassCard from '../common/ClassCard/ClassCard';
import ClassCardButtons from '../common/ClassCard/ClassCardButtons';
import ClassCardContent from '../common/ClassCard/ClassCardContent';
import ClassCardHead from '../common/ClassCard/ClassCardHead';
import ClassCardP from '../common/ClassCard/ClassCardP';
import ClassCardTitle from '../common/ClassCard/ClassCardTitle';

function BasicClassCard() {
  return (
    <ClassCard>
      <ClassCardHead />
      <ClassCardContent>
        <ClassCardP variant="info" text="김수정 I 601호 I 수업일 : 2025-10-11 (토) 13:40" />
        <ClassCardTitle title="[정규] 변형문제 (오후반)" />
        <ClassCardP variant="period" text="예약기간 : 2025-09-25 18:00 ~ 2025-10-01 18:00" />
      </ClassCardContent>
      <ClassCardButtons>
        <Button color="whiteMint" variant="userInfo" radius={50}>
          <p className="typo-lll-bold">신청하기</p>
        </Button>
      </ClassCardButtons>
    </ClassCard>
  );
}

export default BasicClassCard;
