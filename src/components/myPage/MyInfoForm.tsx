import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sampleSchema, type SampleFormValues } from '../../lib/shcemas/sample';
import MyInfoFormField from './MyInfoFormField';

function MyInfoForm() {
  // 샘플용스키마 사용
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<SampleFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(sampleSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SampleFormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyInfoFormField
        id="email"
        label="이메일"
        placeholder="이메일 입력"
        warning="이메일 주소를 입력해 주세요."
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
      />
      <MyInfoFormField
        id="password"
        label="비밀번호"
        placeholder="비밀번호 입력"
        warning="비밀번호는 10자 이상이어야 합니다."
        eye
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
      />
    </form>
  );
}

export default MyInfoForm;
