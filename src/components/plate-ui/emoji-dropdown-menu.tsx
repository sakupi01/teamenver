import { EmojiDropdownMenuOptions, useEmojiDropdownMenuState } from '@udecode/plate-emoji'
import React from 'react'

import { EmojiToolbarDropdown } from '@/components/plate-ui/emoji-toolbar-dropdown'
import { ToolbarButton, ToolbarButtonProps } from '@/components/plate-ui/toolbar'
import { Icons } from '@/components/ui/icons'

import { emojiCategoryIcons, emojiSearchIcons } from './emoji-icons'
import { EmojiPicker } from './emoji-picker'

type EmojiDropdownMenuProps = {
  options?: EmojiDropdownMenuOptions
} & ToolbarButtonProps

export function EmojiDropdownMenu({ options, ...props }: EmojiDropdownMenuProps) {
  const { isOpen, setIsOpen, emojiPickerState } = useEmojiDropdownMenuState(options)

  return (
    <EmojiToolbarDropdown
      control={
        <ToolbarButton pressed={isOpen} isDropdown tooltip='Emoji' {...props}>
          <Icons.emoji />
        </ToolbarButton>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EmojiPicker
        {...emojiPickerState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icons={{
          categories: emojiCategoryIcons,
          search: emojiSearchIcons,
        }}
        settings={options?.settings}
      />
    </EmojiToolbarDropdown>
  )
}
