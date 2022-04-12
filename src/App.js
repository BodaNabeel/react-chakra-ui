import { useToast } from "@chakra-ui/react";


function App() {
  // using chakra ui to create toast
  const toast = useToast();
  const ShowToast = () => {
    return(
  <button
        onClick={() => {
          toast({
            title: "Toast Added",
            description: "Toast deployed successfully",
            status: "info",
            duration: 1000,
            isClosable: true,
          });
        }}
      >
        Show Toast
      </button>
    )
  }
  return (
    <ShowToast/>
  );
}

export default App;
