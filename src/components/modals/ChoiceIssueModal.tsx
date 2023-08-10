import {Button, CustomFlowbiteTheme, Flowbite, Modal} from "flowbite-react";
import {useSelector} from "react-redux";
import {selectTheme} from "@/features/theme/ThemeSlice";
import {useAppSelector} from "@/util/redux/Hooks";
import {selectTranslations} from "@/features/i18n/TranslatorSlice";

const customTheme: CustomFlowbiteTheme = {
    modal: {
        "root": {
            "base": "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
            "show": {
                "on": "flex bg-gray-900 dark:bg-dark-50 bg-opacity-50 dark:bg-opacity-80",
                "off": "hidden"
            },
            "sizes": {
                "sm": "max-w-sm",
                "md": "max-w-md",
                "lg": "max-w-lg",
                "xl": "max-w-xl",
                "2xl": "max-w-2xl",
                "3xl": "max-w-3xl",
                "4xl": "max-w-4xl",
                "5xl": "max-w-5xl",
                "6xl": "max-w-6xl",
                "7xl": "max-w-7xl"
            },
            "positions": {
                "top-left": "items-start justify-start",
                "top-center": "items-start justify-center",
                "top-right": "items-start justify-end",
                "center-left": "items-center justify-start",
                "center": "items-center justify-center",
                "center-right": "items-center justify-end",
                "bottom-right": "items-end justify-end",
                "bottom-center": "items-end justify-center",
                "bottom-left": "items-end justify-start"
            }
        },
        "content": {
            "base": "relative h-full w-full p-4 md:h-auto",
            "inner": "relative rounded-lg bg-white shadow dark:bg-dark-300 flex flex-col max-h-[90vh]"
        },
        "body": {
            "base": "p-6 flex-1 overflow-auto",
            "popup": "pt-0"
        },
        "header": {
            "base": "flex items-start justify-between rounded-t dark:border-dark-400 border-b p-5",
            "popup": "p-2 border-b-0",
            "title": "text-xl font-medium text-gray-900 dark:text-white",
            "close": {
                "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-dark-300 dark:hover:text-white",
                "icon": "h-5 w-5"
            }
        },
        "footer": {
            "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-dark-400",
            "popup": "border-t"
        },
    }
}

interface ChoiceIssueModalProps {
    openIssueModal: string | undefined
    setOpenIssueModal: (modal: string | undefined) => void
}

const ChoiceIssueModal = ({openIssueModal, setOpenIssueModal}: ChoiceIssueModalProps) => {
    const isDark = useSelector(selectTheme)
    const strings = useAppSelector(selectTranslations);

    return (
        <Flowbite theme={{theme: customTheme, dark: isDark}}>
            <Modal dismissible show={openIssueModal === 'dismissible'} onClose={() => setOpenIssueModal(undefined)}>
                <Modal.Header>You are logged in! Choose an action</Modal.Header>
                <Modal.Body>
                    <div className={`flex flex-row gap-2 justify-center align-center mt-3`}>
                        <Button>
                            Open an issue
                        </Button>
                        <Button>
                            View existing issues
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenIssueModal(undefined)}>Sign out</Button>
                    <Button color="gray" onClick={() => setOpenIssueModal(undefined)}>{strings['button.close']}</Button>
                </Modal.Footer>
            </Modal>
        </Flowbite>
    )
}

export default ChoiceIssueModal