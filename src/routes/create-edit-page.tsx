
import { useParams} from 'react-router-dom';
import type { Interview }  from '@/types';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "@/config/firebase.config";
import { useEffect } from 'react';
import {FormMockInterview} from '@/components/form-mock-interview';

const CreateEditPage = () => {
    const {interviewId}=useParams<{ interviewId: string }>() 
    const [interview, setInterview] = useState<Interview | null>(null);
    useEffect(() => {
    const fetchInterview = async () => {
      if (interviewId) {
        try {
          const interviewDoc = await getDoc(doc(db, "interviews", interviewId));
          if (interviewDoc.exists()) {
            setInterview({
              id: interviewDoc.id,
              ...interviewDoc.data(),
            } as Interview);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchInterview();
  }, [interviewId]);

  return (
    <div className="my-4 flex-col w-full">
      <FormMockInterview initialData={interview} />
    </div>
    )
}

export default CreateEditPage
