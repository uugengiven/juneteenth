import AuthWrapper from '@/components/AuthWrapper';
import AdminPhotosComponent from './PhotosComponent';

const AdminPhotosPage = () => {
  return (
    <AdminPhotosComponent />
  );
}

export default AuthWrapper(AdminPhotosPage);