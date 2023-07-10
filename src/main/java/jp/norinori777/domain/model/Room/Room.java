package jp.norinori777.domain.model.Room;

import org.springframework.format.annotation.NumberFormat;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class Room {
    @NotBlank
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    @Min(1)
    private Integer roomId;
    @NotBlank
    @Size(max = 32)
    // private RoomName roomName;
    private String roomName;
    @Size(max = 256)
    // private RoomDescription roomDescription;
    private String roomDescription;
    @NotBlank
    @NumberFormat(style = NumberFormat.Style.NUMBER)
    @Min(1)
    private Integer roomOwnerId;
    @Min(1)
    private Integer state;
}