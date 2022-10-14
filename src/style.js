const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2: 'font-poppins font-semibold ss:text-[48px] text-[30px] text-white ss:leading-[76.8px] leading-[46.8px] w-full',
  paragraph: 'font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-12',
  paddingsmX: 'sm:px-4 px-3',
  paddingY: 'sm:py-4 py-3',
  padding: 'sm:px-4 px-3 sm:py-3 py-2',

  marginX: 'sm:mx-4 mx-3',
  marginY: 'sm:my-4 my-3'
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingsmX}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingsmX}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} mr-0 md:mt-0 mt-5 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} ml-0 md:mt-0 mt-5 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`
}

export default styles
