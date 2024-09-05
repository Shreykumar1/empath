// import { UserButton} from '@clerk/nextjs';
import {  useUser} from '@clerk/nextjs';
const MemberProfile = async () => {
  const {user} = useUser();
  return (
    <div className='px-4 flex items-center gap-2'>
      {/* <UserButton afterSignOutUrl='/' /> */}
      <p className='hidden md:block '>{user.emailAddresses[0].emailAddress}</p>
      Yo
    </div>
  );
};
export default MemberProfile;