import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import TransactionsList from "../../components/TransactionsList";

function Transactions() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    try {
      const ref = collection(db, "sales");
      const q = query(ref, orderBy("createdAt", "desc"));
      const salesDocs = await getDocs(q);
      const arr = [];
      salesDocs.forEach((sale) => {
        arr.push({ ...sale.data(), id: sale.id });
      });
      setSales([...arr]);
    } catch (err) {}
  };

  console.log("sales=>", sales);

  return (
    <div className="">
      <h1>Transactions</h1>

      <TransactionsList sales={sales} />
    </div>
  );
}

export default Transactions;
