import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { signIn, signOut, useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DasboardLayout from '../../components/Layouts/DashboardLayout';

const MySwal = withReactContent(Swal);
const alertContent = () => {
  MySwal.fire({
    position: 'top-end',
    title: 'Neuer Eintrag angelegt.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false,
  });
};

// Form initial state
interface FormItem {
  projectName: string;
  partnerName: string;
  city: string;
  img: string;
  orderId?: string;
  description: string;
}

const INITIAL_STATE: FormItem = {
  projectName: '',
  partnerName: '',
  city: '',
  img: '',
  orderId: '',
  description: '',
};

export default function Page() {
  const { data: session, status } = useSession();

  const handleSubmit = async (payload: FormItem) => {
    const url = '/api/admin/projects';
    try {
      const response = await axios.post(url, payload);
      console.log(response);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DasboardLayout>
      <h1 className="text-center">Dashboard</h1>

      <p>Übersicht über Ihre Funktionen...</p>
    </DasboardLayout>
  );
}
