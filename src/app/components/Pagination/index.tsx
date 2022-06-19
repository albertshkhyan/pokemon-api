import { Pagination as AntPagination, PaginationProps } from 'antd';

interface IPagination2Props extends PaginationProps {}
const Pagination = ({ ...restProps }: IPagination2Props) => {
  return (
    <>
      <AntPagination {...restProps} />
    </>
  );
};

export default Pagination;
