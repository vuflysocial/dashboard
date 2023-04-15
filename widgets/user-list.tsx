import { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface Transaction {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  from: string;
  to: string;
  value: string;
}

async function getLatestTransactions(): Promise<Transaction[]> {
  const apiKey = "VGVRHXFSIDVP3W9SSJ9H81ZBS3WZ1S3SW8";
  const tokenAddress = "0x5c12C812794B874fe4Fdea9A4960df599C89b8E5";
  const url = `https://api.bscscan.com/api?module=account&action=tokentx&address=${tokenAddress}&sort=desc&apikey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}

function LatestTransactions() {
  const [latestTransactions, setLatestTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLatestTransactions().then((data) => {
      setLoading(false);
      setLatestTransactions(data);
    });
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    getLatestTransactions().then((data) => {
      setLoading(false);
      setLatestTransactions(data);
    });
  };

  return (
    <div className="mt-4 mx-4">
      <div className="w-full overflow-hidden rounded-lg">
        {/* Body */}
        
              
        
                  
             
             
         
       
     
        {/* Pagination end */}
      </div>
    </div>
  );
}

export default function UserList(props: { data: any[] }) {
  return <LatestTransactions />;
}
