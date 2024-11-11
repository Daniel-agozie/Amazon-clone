import  {BeatLoader}  from "react-spinners"

const override= {
  display:'block',
  margin: ' 50% auto'
};

const Spinner = ({loading}) => {
  return (
    <div className="flex justify-center">
    <BeatLoader 
      color='#444444'
      loading = {loading}
      cssOverride={override}
      size = {20}
    />
    </div>
  )
}

export default Spinner;